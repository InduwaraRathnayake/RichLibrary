document.getElementById("rulesSection").innerHTML = `
<h1>LIBRARY RULES</h1>
<div class="rules-container">
    <div class="rules-list">
        <div class="rule-item">1. Maintain silence in the library at all times.</div>
        <div class="rule-item">2. No food or drinks allowed inside the library.</div>
        <div class="rule-item">3. Handle books and other materials with care.</div>
        <div class="rule-item">4. Return borrowed items on or before the due date.</div>
        <div class="rule-item">5. Respect the library staff and other patrons.</div>
    </div>
    <div class="rules-image">
        <img src="../../assets/rules.png" alt="Library Rules">
    </div>
</div>
<h2>Lending Periods and Charges</h2>
<table class="rules-table">
    <thead>
        <tr>
            <th>Item Type</th>
            <th>Lending Period</th>
            <th>Late Fee</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Fiction & Non-Fiction</td>
            <td>14 days</td>
            <td>$0.25 per day</td>
        </tr>
        <tr>
            <td>Children's Books</td>
            <td>7 days</td>
            <td>$0.50 per day</td>
        </tr>
        <tr>
            <td>Novels & Comics</td>
            <td>3 days</td>
            <td>$1.00 per day</td>
        </tr>
        <tr>
            <td>Educational & Reference</td>
            <td>In-library use only</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td>Poetry</td>
            <td>21 days</td>
            <td>N/A</td>
        </tr>
    </tbody>
</table>
<p><i>**These Lending Periods and Charges are based on the demand for books in a particular year.</i></p>

`;