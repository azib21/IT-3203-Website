function gradeQuiz() {
        var score = 0;
        var total = 5;
        var resultText = "";

        //Q1: text input
        var q1 = document.getElementById("q1").value.trim().toLowerCase();
        if (q1 === "uruguay") {
          score++;
          resultText += "Q1: Correct<br>";
        } else {
          resultText += "Q1: Incorrect (Answer: Uruguay)<br>";
        }

        //Q2: radio
        var q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === "32") {
          score++;
          resultText += "Q2: Correct<br>";
        } else {
          resultText += "Q2: Incorrect (Answer: 32 teams)<br>";
        }

        //Q3: radio
        var q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value === "4") {
          score++;
          resultText += "Q3: Correct<br>";
        } else {
          resultText += "Q3: Incorrect (Answer: Every 4 years)<br>";
        }

        //Q4: radio
        var q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === "pele") {
          score++;
          resultText += "Q4: Correct<br>";
        } else {
          resultText += "Q4: Incorrect (Answer: Pelé)<br>";
        }

        //Q5: checkboxes
        var q5Checked = document.querySelectorAll('input[name="q5"]:checked');
        var values = [];
        for (var i = 0; i < q5Checked.length; i++) {
          values.push(q5Checked[i].value);
        }

        var hasBrazil = values.indexOf("brazil") !== -1;
        var hasGermany = values.indexOf("germany") !== -1;
        var hasArgentina = values.indexOf("argentina") !== -1;
        var hasNetherlands = values.indexOf("netherlands") !== -1;
        var hasPortugal = values.indexOf("portugal") !== -1;

        if (hasBrazil && hasGermany && hasArgentina && !hasNetherlands && !hasPortugal) {
          score++;
          resultText += "Q5: Correct<br>";
        } else {
          resultText += "Q5: Incorrect (Answer: Brazil, Germany, Argentina)<br>";
        }

        //Total score & if pass or fail
        resultText += "<br><strong>Total Score: " + score + "/" + total + "</strong><br>";

        if (score >= 4) {
          resultText += "<span style='color:green; font-weight:bold'>You Passed!</span>";
        } else {
          resultText += "<span style='color:red; font-weight:bold'>You Did Not Pass. Try Again.</span>";
        }

        //Show results
        document.getElementById("result").innerHTML = resultText;
      }

      function resetQuiz() {
        document.getElementById("quizForm").reset();
        document.getElementById("result").innerHTML = "";
      }