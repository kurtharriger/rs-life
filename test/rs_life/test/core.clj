(ns rs-life.test.core
  (:require [clojure.test :refer :all]
            [rs-life.core :refer :all]))

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

(deftest test-get-neighbour-count
  (testing "example board"
    (is (= [[2 1 2 2 2]
            [3 4 3 2 2]
            [3 3 3 3 2]
            [4 3 2 2 2]
            [1 2 1 1 0]]
           (get-neighbour-counts
            [[0 1 0 0 0]
             [1 0 0 1 1]
             [1 1 0 0 1]
             [0 1 0 0 0]
             [1 0 0 0 1]]))))
  (testing "example next generation board"
    (is (= [[1 2 2 3 2]
            [2 5 4 5 3]
            [3 5 5 5 3]
            [3 3 4 3 2]
            [1 1 1 0 0]]
           (get-neighbour-counts
            [[0 0 0 0 0]
             [1 0 1 1 1]
             [1 1 1 1 1]
             [0 1 0 0 0]
             [0 0 0 0 0]])))))

(deftest test-next-state
  (testing "under-population"
    (is (= 0 (get-next-state 1 0)))
    (is (= 0 (get-next-state 1 1))))
  (testing "survival"
    (is (= 1 (get-next-state 1 2)))
    (is (= 1 (get-next-state 1 3))))
  (testing "overcrowding"
    (is (= 0 (get-next-state 1 4)))
    (is (= 0 (get-next-state 1 5)))
    (is (= 0 (get-next-state 1 6)))
    (is (= 0 (get-next-state 1 7)))
    (is (= 0 (get-next-state 1 8))))
  (testing "reproduction"
    (is (= 1 (get-next-state 0 3))))
  (testing "all others"
    (is (= 0 (get-next-state 0 0)))
    (is (= 0 (get-next-state 0 1)))
    (is (= 0 (get-next-state 0 2)))
    (is (= 0 (get-next-state 0 4)))
    (is (= 0 (get-next-state 0 5)))
    (is (= 0 (get-next-state 0 6)))
    (is (= 0 (get-next-state 0 7)))
    (is (= 0 (get-next-state 0 8)))))
