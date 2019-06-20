document.addEventListener("DOMContentLoaded", function() {
  
  axios.get("https://bb-election-api.herokuapp.com/")
  .then((response) => {
    const candidates = response.data.candidates;
    const candidatesList = document.querySelector('#candidates-list');

    candidates.forEach(candidate => {
      const dataElem = document.createElement('li');
      dataElem.innerText = `Name: ${candidate.name}\nNumber of Votes: ${candidate.votes}\n\n`;
      candidatesList.append(dataElem);
    });

    // console.log(response.data.candidates.[0].name)
  })


});
