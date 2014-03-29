(ns rs-life.core)

(defn valid-index? [row-size col-size row col]
  (and (>= row 0) (>= col 0) (< row row-size) (< col col-size)))

(defn get-neighbouring-indecies
  [[row-size col-size] [row col]]
  {:pre [(valid-index? row-size col-size row col)]}
  (filter
   (fn [[new-row new-col]]
     (valid-index? row-size col-size new-row new-col))
   (for [[row-delta col-delta] [[-1 -1] [-1 0] [-1 1]
                                [ 0 -1]        [ 0 1]
                                [ 1 -1] [ 1 0] [ 1 1]]]
     [(+ row row-delta) (+ col col-delta)])))

(defn get-board-size
  [game-board]
  [(count game-board) (count (first game-board))])

(defn get-value-at [game-matrix [row col]]
  (-> game-matrix
      (nth row)
      (nth col)))

(defn count-neighbours-at-pos
  [game-board pos]
  (apply +
         (for [pos (get-neighbouring-indecies (get-board-size game-board) pos)]
           (get-value-at game-board pos))))

(defn get-neighbour-counts
  [game-board]
  (let [[row-size col-size]
        (get-board-size game-board)]
    (->>
     (for [row (range row-size)
           col (range col-size)]
       (count-neighbours-at-pos game-board [row col]))
     (partition col-size)
     (map vec)
     vec)))

(defn get-next-state [live neighbour-count]
  (cond
   (and (pos? live) (< neighbour-count 2)) 0 ;; under-population
   (and (pos? live) (< neighbour-count 4)) 1 ;; survival
   (pos? live) 0                             ;; overcrowding
   (= neighbour-count 3) 1                   ;; reproduction
   :else 0))

(defn next-generation
  "Determine the next generation in the game of life"
  [game-board]
  (let [[row-size col-size] (get-board-size game-board)
        neighbour-counts (get-neighbour-counts game-board)]
    (->> (for [row (range row-size)
               col (range col-size)
               :let [live (get-value-at game-board [row col])
                     neighbour-count (get-value-at neighbour-counts [row col])]]
           (get-next-state live neighbour-count))
         (partition col-size)
         (map vec)
         vec)))
