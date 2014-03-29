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
  (testing "returns the 8 neigbours of a middle square"
    (is (= [[0 0] [0 1] [0 2] [1 0] [1 2] [2 0] [2 1] [2 2]]
           (get-neighbouring-indecies [3 3] [1 1]))))
  (testing "does not return negative indecies for left and top edge"
    (is (= [[0 1] [1 0] [1 1]]
           (get-neighbouring-indecies [3 3] [0 0]))))
  (testing "does not return indicies beyond right and bottom edge"
    (is (= [[1 1] [1 2] [2 1]]
           (get-neighbouring-indecies [3 3] [2 2]))))
  (testing "throws exception if initial position is not on board"
    (is (thrown? AssertionError
                 (get-neighbouring-indecies [3 3] [3 3])))))
