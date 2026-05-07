# Artmash: Creative Social Platform

Artmash is a visually immersive web-based hybrid creative social ecosystem designed to celebrate artistic expression, amplify digital portfolios, and cultivate meaningful artist-to-audience interaction. It blends a dynamic feed-oriented experience (inspired by Instagram) with elegantly structured artist portfolios (inspired by DeviantArt).

## 🚀 Features
- **Premium Hybrid Feed**: Real-time content discovery with multiple sorting options (Newest, Popular, Shuffle).
- **Artist Portfolios**: Dedicated gallery pages for artists to showcase their work.
- **Visual Uploads**: Seamless artwork sharing with support for titles, descriptions, and tags.
- **Social Interaction**: Like system and tag-based filtering.
- **Immersive Design**: Dark-themed, responsive UI with glassmorphism effects.

## 🧠 Academic Implementation (DSA)
This project serves as an academic prototype demonstrating the practical application of Data Structures and Algorithms (DSA) in a real-world scenario.

### Implemented Algorithms:
1. **Hashing (SHA-256)**: Secure user authentication.
2. **Merge Sort & Quick Sort**: Efficient feed sorting by date and popularity.
3. **Binary Max-Heap**: Powering the "Trending Now" analytics engine.
4. **Fisher-Yates Shuffle**: Randomized content exploration for the feed.
5. **Searching (Linear/Binary)**: Efficient lookup for users and artworks.
6. **MRU Cache Policy**: High-performance caching for frequently accessed content.
7. **Rule-Based Recommendation**: Tag-based similarity algorithm for personalized content.
8. **Tag Filtering**: Hash Map based filtering for quick content categorization.
9. **Event Handling & DOM Algorithms**: Optimized frontend interactions.
10. **DFS (Depth-First Search)**: Used for future expansion of nested comment threads.

## 🛠️ Technology Stack
- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
- **Data Storage**: JSON (Persistence Layer)

## 📦 Installation & Setup
1. Ensure you have Python installed on your system.
2. Clone this repository.
3. Install the required dependencies:
   ```bash
   pip install flask werkzeug
   ```
4. Run the application using the provided batch file:
   ```bash
   run.bat
   ```
5. Access the application at `http://127.0.0.1:5000`.

## 📂 Project Structure
- `server.py`: Main Flask application entry point.
- `dsa_engine.py`: Core logic for all custom DSA implementations.
- `user_manager.py`: Handles user authentication and registration.
- `post_manager.py`: Manages artwork uploads, feeds, and trending logic.
- `templates/`: HTML templates for the UI.
- `static/`: CSS and JS assets for the frontend.
- `uploads/`: Directory for stored artwork images.

## 📝 Contributors
- [Your Name/Group Members]

## 📜 References
- Amrita College 22AIE112 (DSA1) and 22AIE115 (UID) Course Guidelines.
