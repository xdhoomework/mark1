import json
import os
import time

class ForumManager:
    def __init__(self, file_path=None):
        if file_path is None:
            file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "forums.json")
        self.file_path = file_path
        if not os.path.exists(self.file_path):
            with open(self.file_path, "w") as f:
                json.dump([], f)
        self.threads = self.load_threads()

    def load_threads(self):
        try:
            with open(self.file_path, "r") as f:
                return json.load(f)
        except:
            return []

    def save_threads(self):
        with open(self.file_path, "w") as f:
            json.dump(self.threads, f, indent=4)

    def create_thread(self, username, category, title, content):
        thread = {
            "id": len(self.threads) + 1,
            "username": username,
            "category": category,
            "title": title,
            "content": content,
            "timestamp": time.time(),
            "votes": 0,
            "replies": []
        }
        self.threads.append(thread)
        self.save_threads()
        return thread

    def get_threads(self, category=None):
        if category:
            return [t for t in self.threads if t['category'] == category]
        return sorted(self.threads, key=lambda x: x['timestamp'], reverse=True)

    def get_thread_by_id(self, thread_id):
        for thread in self.threads:
            if thread['id'] == thread_id:
                return thread
        return None

    def add_reply(self, thread_id, username, content):
        thread = self.get_thread_by_id(thread_id)
        if thread:
            reply = {
                "id": len(thread['replies']) + 1,
                "username": username,
                "content": content,
                "timestamp": time.time(),
                "votes": 0
            }
            thread['replies'].append(reply)
            self.save_threads()
            return reply
        return None

    def vote_thread(self, thread_id, amount=1):
        thread = self.get_thread_by_id(thread_id)
        if thread:
            thread['votes'] += amount
            self.save_threads()
            return True
        return False
