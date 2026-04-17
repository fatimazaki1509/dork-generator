function generateDorks() {
    let inputField = document.getElementById("inputText");
    let input = inputField.value.trim();

    // ❌ Empty input check
    if (input === "") {
        alert("Please enter something!");
        return;
    }

    let dorks = [
        `site:${input} inurl:login`,
        `intitle:"admin login" ${input}`,
        `filetype:pdf ${input}`,
        `"${input}" password`,
        `inurl:admin ${input}`
    ];

    let output = document.getElementById("output");
    output.innerHTML = "";

    // ⭐ Recommended (first one)
    let recommended = dorks[0];

    let recDiv = document.createElement("div");
    recDiv.className = "item";
    recDiv.style.border = "1px solid #ff2e2e";
    recDiv.style.boxShadow = "0 0 10px rgba(255,0,0,0.5)";

    let recText = document.createElement("span");
    recText.innerHTML = `⭐ <b>Recommended:</b> ${recommended}`;

    recDiv.appendChild(recText);
    output.appendChild(recDiv);

    // 🔽 Other dorks (skip first one to avoid duplicate)
    dorks.slice(1).forEach((dork) => {

        let div = document.createElement("div");
        div.className = "item";

        let text = document.createElement("span");
        text.textContent = dork;

        let actions = document.createElement("div");
        actions.className = "actions";

        // Copy button
        let copy = document.createElement("button");
        copy.textContent = "Copy";
        copy.onclick = () => {
            navigator.clipboard.writeText(dork);
            copy.textContent = "Copied!";
        };

        // Search button
        let open = document.createElement("button");
        open.textContent = "Search";
        open.onclick = () => {
            window.open(`https://google.com/search?q=${encodeURIComponent(dork)}`);
        };

        actions.appendChild(copy);
        actions.appendChild(open);

        div.appendChild(text);
        div.appendChild(actions);

        output.appendChild(div);
    });

    // 🔥 Show reset button
    document.getElementById("resetBtn").style.display = "inline-block";

    // 🔒 Disable input after generate (pro feel)
    inputField.disabled = true;
}
