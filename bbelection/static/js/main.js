document.addEventListener("DOMContentLoaded", function() {
  
  axios.get("https://bb-election-api.herokuapp.com/")
  .then((response) => {
    const candidates = response.data.candidates;
    const candidatesList = document.querySelector('#candidates-list');

    candidates.forEach(candidate => {
      
      // CREATING THE LIST ITEM //
      const dataElem = document.createElement('li');
      dataElem.innerText = `Name: ${candidate.name}\nNumber of Votes: ${candidate.votes}\n`;
      
      // CREATING THE ATTACHED FORM //
      const voteForm = document.createElement('form');
      voteForm.method = "POST";
      voteForm.action = "https://bb-election-api.herokuapp.com/vote";

      // CREATING THE FORM SUBMIT BUTTON //
      const voteBtn = document.createElement('input');
      voteBtn.type = "submit";
      // voteBtn.name = "name";
      // voteBtn.value = candidate.name;

      // CREATING THE HIDDEN FIELD THAT HOLDS THE DATA TO THE BUTTON //
      const hiddenFld = document.createElement('input');
      hiddenFld.type = "hidden"
      hiddenFld.name = "name";
      hiddenFld.value = candidate.name;
      
      // ATTACHING EVERYTHING TOGETHER //
      voteForm.append(hiddenFld);
      voteForm.append(voteBtn);
      dataElem.append(voteForm);
      candidatesList.append(dataElem);


      voteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('good job');

        let name = e.target.querySelector('input[name=name]').value

        axios({
          method: 'post',
          url: 'https://bb-election-api.herokuapp.com/vote',
          data: {
            name: name
          },
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
      });
    });

  })
  .catch(error => {
    console.log(error)
  });
  console.log('hello world!')
});
