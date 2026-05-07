import json
import os
from dsa_engine import DSAEngine


class UserManager:

    def __init__(self, file_path=None):
        if file_path is None:
            file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "users.json")
        self.file_path = file_path

        # create file if missing
        if not os.path.exists(self.file_path):
            with open(self.file_path, "w") as f:
                json.dump({}, f)

        self.users = self.load_users()


    # load users from json
    def load_users(self):
        with open(self.file_path, "r") as f:
            return json.load(f)


    # save users to json
    def save_users(self):
        with open(self.file_path, "w") as f:
            json.dump(self.users, f, indent=4)


    # register new user
    def register_user(self, email, username, fullname, hashed_password):

        if username in self.users:
            return False

        self.users[username] = {
            "email": email,
            "fullname": fullname,
            "password": hashed_password
        }

        self.save_users()

        return True


    # login verification (now using custom SHA-256)
    def authenticate(self, username, password):

        if username in self.users:

            stored_password = self.users[username]["password"]
            input_hash = DSAEngine.sha256_hash(password)

            return stored_password == input_hash

        return False


    # delete user
    def delete_user(self, username):

        if username in self.users:
            del self.users[username]
            self.save_users()
            return True

        return False


    # update user
    def update_user(self, username, data):

        if username in self.users:
            self.users[username].update(data)
            self.save_users()
            return True

        return False