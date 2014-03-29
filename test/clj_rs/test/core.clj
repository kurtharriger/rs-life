(ns clj-rs.test.core
  (:require [clojure.test :refer :all]
            [clj-rs.core :refer :all]))

(deftest test-life
  (testing "example board"
    (is (= [[0 0 0 0 0]
            [1 0 1 1 1]
            [1 1 1 1 1]
            [0 1 0 0 0]
            [0 0 0 0 0]]
           (next-generation
            [[0 1 0 0 0]
             [1 0 0 1 1]
             [1 1 0 0 1]
             [0 1 0 0 0]
             [1 0 0 0 1]])))))

(deftest test-get-neighbouring-indecies
  (is (= [[0 0] [0 1] [0 2] [1 0] [1 2] [2 0] [2 1] [2 2]]
       (get-neighbouring-indecies 3 3 [1 1]))))
