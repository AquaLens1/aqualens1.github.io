  <script>
    // Fetch Nav bar
        fetch('nav_bar.html')
            .then(res => res.text())
            .then(data => {
                document.getElementById('navbar-container').innerHTML = data;
        });

    // Fetch footer
        fetch('footer.html')
            .then(res => res.text())
            .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
                
        </script>