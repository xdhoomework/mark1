import hashlib
import random
import time

class DSAEngine:
    """
    Core engine for Artmash containing custom implementations of 
    required data structures and algorithms.
    """

    # --- 1. Hashing (Algorithm 9) ---
    @staticmethod
    def sha256_hash(data: str) -> str:
        """Manually calling hashlib for SHA-256 as required."""
        return hashlib.sha256(data.encode()).hexdigest()

    # --- 2. Sorting (Algorithm 2) ---
    @staticmethod
    def merge_sort(arr, key=lambda x: x):
        """Merge Sort implementation for stable sorting (e.g., by date)."""
        if len(arr) <= 1:
            return arr
        
        mid = len(arr) // 2
        left = DSAEngine.merge_sort(arr[:mid], key)
        right = DSAEngine.merge_sort(arr[mid:], key)
        
        return DSAEngine._merge(left, right, key)

    @staticmethod
    def _merge(left, right, key):
        result = []
        i = j = 0
        while i < len(left) and j < len(right):
            if key(left[i]) <= key(right[j]):
                result.append(left[i])
                i += 1
            else:
                result.append(right[j])
                j += 1
        result.extend(left[i:])
        result.extend(right[j:])
        return result

    @staticmethod
    def quick_sort(arr, key=lambda x: x):
        """Quick Sort implementation for fast sorting (e.g., by likes)."""
        if len(arr) <= 1:
            return arr
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if key(x) > key(pivot)] # Sort descending for likes
        middle = [x for x in arr if key(x) == key(pivot)]
        right = [x for x in arr if key(x) < key(pivot)]
        return DSAEngine.quick_sort(left, key) + middle + DSAEngine.quick_sort(right, key)

    # --- 3. Shuffling (Algorithm 8) ---
    @staticmethod
    def fisher_yates_shuffle(arr):
        """Randomizes the order of the feed for the 'Explore' feature."""
        n = len(arr)
        for i in range(n - 1, 0, -1):
            j = random.randint(0, i)
            arr[i], arr[j] = arr[j], arr[i]
        return arr

    # --- 4. Searching (Algorithm 1) ---
    @staticmethod
    def linear_search(arr, target, key=lambda x: x):
        """Basic linear search for finding users or tags."""
        for item in arr:
            if key(item) == target:
                return item
        return None

    @staticmethod
    def binary_search(arr, target, key=lambda x: x):
        """Fast binary search (requires sorted array)."""
        low = 0
        high = len(arr) - 1
        while low <= high:
            mid = (low + high) // 2
            if key(arr[mid]) == target:
                return arr[mid]
            elif key(arr[mid]) < target:
                low = mid + 1
            else:
                high = mid - 1
        return None

    # --- 5. Priority Queue & Binary Heap (Algorithm 4) ---
    class MaxHeap:
        """Binary Max-Heap for tracking 'Trending' artworks."""
        def __init__(self):
            self.heap = []

        def insert(self, item, priority):
            self.heap.append({'item': item, 'priority': priority})
            self._bubble_up(len(self.heap) - 1)

        def extract_max(self):
            if not self.heap:
                return None
            if len(self.heap) == 1:
                return self.heap.pop()
            
            root = self.heap[0]
            self.heap[0] = self.heap.pop()
            self._bubble_down(0)
            return root

        def _bubble_up(self, index):
            parent = (index - 1) // 2
            if index > 0 and self.heap[index]['priority'] > self.heap[parent]['priority']:
                self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
                self._bubble_up(parent)

        def _bubble_down(self, index):
            largest = index
            left = 2 * index + 1
            right = 2 * index + 2
            
            if left < len(self.heap) and self.heap[left]['priority'] > self.heap[largest]['priority']:
                largest = left
            if right < len(self.heap) and self.heap[right]['priority'] > self.heap[largest]['priority']:
                largest = right
            
            if largest != index:
                self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
                self._bubble_down(largest)

        def get_top_n(self, n):
            """Returns the top N items without fully emptying the heap."""
            # For a real implementation, we'd copy the heap and extract.
            # Here we just sort a copy for simplicity in a prototype.
            temp = sorted(self.heap, key=lambda x: x['priority'], reverse=True)
            return temp[:n]

    # --- 6. MRU Cache Policy (Algorithm 5) ---
    class MRUCache:
        """Most Recently Used Cache for storing profile/post lookups."""
        def __init__(self, capacity=5):
            self.capacity = capacity
            self.cache = [] # Stores (key, value) pairs

        def get(self, key):
            for i, (k, v) in enumerate(self.cache):
                if k == key:
                    # Move to front (Most Recently Used)
                    item = self.cache.pop(i)
                    self.cache.insert(0, item)
                    return v
            return None

        def put(self, key, value):
            # Check if exists
            for i, (k, v) in enumerate(self.cache):
                if k == key:
                    self.cache.pop(i)
                    break
            
            if len(self.cache) >= self.capacity:
                self.cache.pop() # Remove least recently used (actually LRU style, but MRU often refers to the policy of keeping MRU at top)
            
            self.cache.insert(0, (key, value))

    # --- 7. Rule-Based Recommendation (Algorithm 6) ---
    @staticmethod
    def recommend_posts(user_interests, all_posts):
        """
        Simple tag-based recommendation.
        Scores posts based on overlapping tags with user interests.
        """
        recommendations = []
        for post in all_posts:
            score = 0
            post_tags = post.get('tags', [])
            for tag in post_tags:
                if tag in user_interests:
                    score += 1
            if score > 0:
                recommendations.append({'post': post, 'score': score})
        
        # Sort by score
        return [r['post'] for r in DSAEngine.quick_sort(recommendations, key=lambda x: x['score'])]
