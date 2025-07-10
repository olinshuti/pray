<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PDF Downloads</title>
</head>
<body>
    <header>
        <h1>Welcome to PDF Downloads</h1>
    </header>
    <main>
        <h2>Available Studies</h2>
        <div class="study-list">
            <div class="study-item">
                <h3>Faith Foundations</h3>
                <button class="download-btn" onclick="redirectToAuth()">Download PDF</button>
            </div>
            <div class="study-item">
                <h3>Book of John Study</h3>
                <button class="download-btn" onclick="redirectToAuth()">Download PDF</button>
            </div>
            <!-- Add more studies as needed -->
        </div>
    </main>
    <script>
        function redirectToAuth() {
            window.location.href = 'auth.html';
        }
    </script>
</body>
</html>