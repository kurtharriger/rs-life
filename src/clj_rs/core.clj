(ns clj-rs.core)

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



(defn next-generation
  "Determine the next generation in the game of life"
  [game-board]
  [[0 0 0 0 0]
   [1 0 1 1 1]
   [1 1 1 1 1]
   [0 1 0 0 0]
   [0 0 0 0 0]])
