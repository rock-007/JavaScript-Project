let x1 = document.getElementById("apicallx");

updateUI = (data) => {
  let finalcity = data.usercityinfo;
  let finaldata = data.citycondition;
  console.log(finalcity);
  console.log(finaldata);

  x1.innerHTML = `<h5 class="text-muted"><span> ${finalcity.LocalizedName}</span> </h5>
      <div class="text-muted" style="padding: 5%"><span>${finaldata.WeatherText}</span></div>
      <h1 class="text-muted" style="padding: 5%;text-align: center"> <span>${finaldata.Temperature.Metric.Value}&degC</span></h1>`;
};
