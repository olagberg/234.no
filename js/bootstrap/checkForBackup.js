function checkForBackup() {
    var test = document.createElement("div")
    test.className = "hidden d-none"

    document.head.appendChild(test)
    var cssLoaded = window.getComputedStyle(test).display === "none"
    document.head.removeChild(test)
    if (!cssLoaded) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "../css/bootstrap/bootstrap.min.css";

        document.head.appendChild(link);
        console.log("Running Bootstrap CSS from local fallback!")
    } else {
        console.log("Boostrapcdn ok!")
    }

    console.log("checkForBackup() done.")
}

checkForBackup();