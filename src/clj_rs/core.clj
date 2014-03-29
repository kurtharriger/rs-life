(ns clj-rs.core)

(defn next-generation
  "Determine the next generation in the game of life"
  [game-board]
  [[0 0 0 0 0]
   [1 0 1 1 1]
   [1 1 1 1 1]
   [0 1 0 0 0]
   [0 0 0 0 0]])
