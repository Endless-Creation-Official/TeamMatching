document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector("button");
    let teamIndex = 0; // To keep track of the current team
    let memberIndex = 1; // Start with the second member since the first is the team leader already listed

    const TeamMate = [
        ["김경태", "임채영", "최한나", "김성휘", "최강"],
        ["강영훈", "박수진", "주하늘", "박준범", "최현락"],
        ["조유찬", "김태연", "권유성", "이서경", "박세용"],
        ["박진홍", "정다운", "이채린", "신용우", "김강현"],
        ["김병호", "문효재", "김채윤", "홍준희"],
    ];

    button.addEventListener('click', () => {
        if (teamIndex < TeamMate.length) {
            const teamLeader = TeamMate[teamIndex][0];
            const list = document.getElementById(teamLeader); // Match the ID with the team leader's name
            const p = document.querySelector('p');
            p.textContent = "";
            
            if (memberIndex < TeamMate[teamIndex].length) {
                const li = document.createElement('li');
                li.textContent = TeamMate[teamIndex][memberIndex];
                list.appendChild(li);
                memberIndex++;
            } else {
                list.style.border = "2px solid green";
                teamIndex++;
                memberIndex = 1; // Reset to the second member for the next team
            }
        } else {
            alert('All team members have been added.');
        }
    });
});
