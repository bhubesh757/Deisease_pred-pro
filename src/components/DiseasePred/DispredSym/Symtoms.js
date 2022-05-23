import React from 'react'

function Symtoms() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Disease Prediction</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{__html: "\n        .checkbox-lg .custom-control-label::before,\n        .checkbox-lg .custom-control-label::after {\n            top: .8rem;\n            width: 1.55rem;\n            height: 1.55rem;\n        }\n        \n        .f2 {\n            display: none;\n        }\n        \n        .f3 {\n            display: none;\n        }\n        \n        .f4 {\n            display: none;\n        }\n        \n        .checkbox-lg .custom-control-label {\n            padding-top: 13px;\n            padding-left: 6px;\n        }\n        \n        .checkbox-xl .custom-control-label::before,\n        .checkbox-xl .custom-control-label::after {\n            top: 1.2rem;\n            width: 1.85rem;\n            height: 1.85rem;\n        }\n        \n        .checkbox-xl .custom-control-label {\n            padding-top: 23px;\n            padding-left: 10px;\n        }\n        /* .easy {\n            background-color: rgb(73, 164, 250);\n            padding-left: 15px;\n            padding-right: 15px;\n            padding-bottom: 10px;\n            padding-top: 10px;\n            border-radius: 10%;\n            margin-left: 7%;\n            margin-right: -19%;\n        } */\n        \n        .custom-control-input {\n            margin-left: -15px;\n        }\n    " }} />
        <div id="#navigation">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Disease Prediction </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="{{ url_for('Homepage') }}">Home <span className=" sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="{{ url_for('About') }}">About Application</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="{{ url_for('Contact') }}">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <br /> 
        <div className="row">
          <div className="col-4">
            <img src="../static/Science.png" className="img-fluid float-right mx-0" alt="Responsive image" style={{width: '150px', height: '100px'}} />
          </div>
          <div className="col float-left">
            <h1 className="text-left mt-3 mx-0 font-weight-bolder">Medical Condition Prediction</h1>
          </div>
        </div>
        <br />
        <h2 className="text-center font-weight-bold">Are you experiencing any of these symptoms</h2>
        <h2 className="text-center font-weight-bold">below (mark all those applicable)</h2>
        <br />
        <hr /><br />
        <div className="col-lg-4 container">
          <div className="row">
            {/* <div className="col-md-12">
              {'{'}% with messages = get_flashed_messages(with_categories=true) %{'}'} {'{'}% if messages %{'}'}
              <div className="alert alert-danger text-center font-weight-bold">
                {'{'}{'{'} messages[0][1] {'}'}{'}'}
              </div>
              {'{'}% endif %{'}'} {'{'}% endwith %{'}'} {'{'}% block content %{'}'}{'{'}% endblock %{'}'}
            </div> */}
          </div>
        </div>
        <br /><br />
        <form action="{{ url_for('Disease') }}" method="POST">
          <div className="container ">
            <div id="first" className="f1">
              <div className="container bg-light">
                <div className="row ">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked15" name="fever" defaultValue="fever" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked15"><span className="label label-primary"><b>Fever</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked25" name="cough" defaultValue="cough" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked25"><span className="label label-primary"><b>Cough</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked35" name="vomiting" defaultValue="vomiting" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked35"><span className="label label-primary"><b>Vomiting</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked45" name="cold" defaultValue="cold" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked45"><span className="label label-primary"><b>Cold</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked55" name="stomach_pain" defaultValue="stomach_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked55"><span className="label label-primary"><b>Stomach Pain</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked65" name="vision_problem" defaultValue="vision_problem" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked65"><span className="label label-primary"><b>Vision problem</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked75" name="confusion" defaultValue="confusion" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked75"><span className="label label-primary"><b>Confusion</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked85" name="arm_pain" defaultValue="arm_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked85"><span className="label label-primary"><b>Arm pain</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked95" name="itching" defaultValue="itching" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked95"><span className="label label-primary"><b>Itching</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked105" name="muscle_pain" defaultValue="muscle_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked105"><span className="label label-primary"><b>Muscle Pain</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked115" name="depression" defaultValue="depression" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked115"><span className="label label-primary"><b>Depression</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked125" name="headache" defaultValue="headache" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked125"><span className="label label-primary"><b>Headache</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-xl-6">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked135" name="sweating" defaultValue="sweating" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked135"><span className="label label-primary"><b>Sweating </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-6">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked145" name="shoulder_pain" defaultValue="shoulder_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked145"><span className="label label-primary"><b>Shoulder pain</b></span></label>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              {/* <div class="text-center">
                <div class="custom-control custom-checkbox checkbox-lg">
                    <input type="checkbox" class="custom-control-input bg-light" id="defaultUnchecked">
                    <label class="custom-control-label easy  " for="defaultUnchecked"><span class="label label-primary"><b>None of these</b></span></label>
                </div>
            </div> */}
              <br />
              <div className="text-center">
                <a href="#second"><button id="nextBtn1" type="button" className="btn btn-primary btn-lg">Next</button></a>
              </div>
            </div>
            <br />
            <div id="second" className="f2 container bg-light">
              <hr /><br />
              <div className="container bg-light">
                <div className="row block2" id="section2">
                  <br /><br />
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked14" name="stiff_neck" defaultValue="stiff_neck" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked14"><span className="label label-primary"><b>Stiff Neck</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked2444" name="low_heartbeat" defaultValue="low_heartbeat" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked2444"><span className="label label-primary"><b>Low heartbeat</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked34" name="nausea" defaultValue="nausea" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked34"><span className="label label-primary"><b>Nausea</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked44" name="dry_mouth" defaultValue="dry_mouth" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked44"><span className="label label-primary"><b>Dry mouth</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block2">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked53" name="chest_pain" defaultValue="chest_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked53"><span className="label label-primary"><b>Chest Pain</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked63" name="yawning" defaultValue="yawning" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked63"><span className="label label-primary"><b>Yawning</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked73" name="low_breath" defaultValue="low_breath" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked73"><span className="label label-primary"><b>Low breath</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked83" name="stool_pressure" defaultValue="stool_pressure" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked83"><span className="label label-primary"><b>Stool pressure</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block2">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked93" name="skin_rash" defaultValue="skin_rash" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked93"><span className="label label-primary"><b>Skin rash</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked103" name="swelling" defaultValue="swelling" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked103"><span className="label label-primary"><b>Swelling </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked113" name="fatigue" defaultValue="fatigue" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked113"><span className="label label-primary"><b>Fatigue</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked123" name="urine_blood" defaultValue="urine_blood" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked123"><span className="label label-primary"><b>Urine Blood</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block2">
                  <div className="col-6 col-xl-6">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked133" name="back_pain" defaultValue="back_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked133"><span className="label label-primary"><b>Back Pain </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-6">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked143" name="painful_bowel_moments" defaultValue="painful_bowel_moments" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked143"><span className="label label-primary"><b>Painful Bowel moments</b></span></label>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              {/* <div class="text-center">
        <div class="custom-control custom-checkbox checkbox-lg">
            <input type="checkbox" class="custom-control-input bg-light" id="defaultUnchecked">
            <label class="custom-control-label easy  " for="defaultUnchecked"><span class="label label-primary"><b>None of these</b></span></label>
        </div>
    </div> */}
              <br />
              <div className="text-center" id="nb2">
                <a href="#third"><button id="nextbtn2" className="btn btn-primary btn-lg" type="button">Next</button></a>
              </div>
            </div>
            <br />
            <div id="third" className="f3 container bg-light">
              <hr /><br />
              <div className="container bg-light">
                <div className="row   block3">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked12" name="anal_bleeding" defaultValue="anal_bleeding" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked12"><span className="label label-primary"><b>Anal bleeding</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked22" name="constipation" defaultValue="constipation" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked22"><span className="label label-primary"><b>Constipation</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked32" name="bloody_stools" defaultValue="bloody_stools" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked32"><span className="label label-primary"><b>Bloody stools</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked42" name="fecal_leakage" defaultValue="fecal_leakage" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked42"><span className="label label-primary"><b>Fecal leakage</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block3">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked52" name="muscle_cramps" defaultValue="muscle_cramps" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked52"><span className="label label-primary"><b>Muscle cramps </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked62" name="abdominal_pain" defaultValue="abdominal_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked62"><span className="label label-primary"><b>Abdominal Pain</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked72" name="weight_loss" defaultValue="weight_loss" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked72"><span className="label label-primary"><b>Weight loss</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked82" name="dizziness" defaultValue="dizziness" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked82"><span className="label label-primary"><b> Dizziness</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block3">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked92" name="sweat" defaultValue="sweat" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked92"><span className="label label-primary"><b>Sweat</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked102" name="more_urine" defaultValue="more_urine" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked102"><span className="label label-primary"><b>More Urine </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked112" name="bleed" defaultValue="bleed" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked112"><span className="label label-primary"><b>Bleed</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked122" name="neck_pain" defaultValue="neck_pain" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked122"><span className="label label-primary"><b>Neck pain </b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block3">
                  <div className="col-6 col-xl-4">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked132" name="rash" defaultValue="rash" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked132"><span className="label label-primary"><b>Rash </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked142" name="muscle_spasm" defaultValue="muscle_spasm" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked142"><span className="label label-primary"><b>Muscle spasm </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-4">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked1421" name="breath_problems" defaultValue="breath_problems" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked1421"><span className="label label-primary"><b> Breath Problems </b></span></label>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              {/* <br> */}
              {/* <div class="text-center">
    <div class="custom-control custom-checkbox checkbox-lg">
        <input type="checkbox" class="custom-control-input bg-light" id="defaultUnchecked">
        <label class="custom-control-label easy  " for="defaultUnchecked"><span class="label label-primary"><b>None of these</b></span></label>
    </div>
</div> */}
              {/* <br> */}
              <br />
              <div className="text-center" id="nb3">
                <a href="#fourth"><button id="nextBtn3" type="button" className="btn btn-primary btn-lg">Next</button></a>
              </div>
            </div>
            <br />
            <div id="fourth" className="f4">
              <hr /><br />
              <div className="container bg-light">
                <div className="row block4 ">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked11" name="anus_swelling" defaultValue="anus_swelling" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked11"><span className="label label-primary"><b>Anal swelling</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked21" name="thirsty" defaultValue="thirsty" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked21"><span className="label label-primary"><b>Thirsty</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked31" name="anus_itching" defaultValue="anus_itching" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked31"><span className="label label-primary"><b>Anus itching </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked41" name="decreased_appetite" defaultValue="decreased_appetite" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked41"><span className="label label-primary"><b>Decreased appetite </b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block4">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked51" name="wheezing" defaultValue="wheezing" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked51"><span className="label label-primary"><b>Wheezing </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked61" name="diarrhea" defaultValue="diarrhea" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked61"><span className="label label-primary"><b>Diarrhea </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked71" name="neck_stiff" defaultValue="neck_stiff" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked71"><span className="label label-primary"><b>Neck stiff </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked81" name="lump_anus" defaultValue="lump_anus" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked81"><span className="label label-primary"><b> Lump anus</b></span></label>
                    </div>
                  </div>
                </div>
                <div className="row block4">
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked91" name="anxiety" defaultValue="anxiety" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked91"><span className="label label-primary"><b>Anxiety</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked101" name="more_urine" defaultValue="more_urine" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked101"><span className="label label-primary"><b>More Urine </b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked111" name="bleeding" defaultValue="bleeding" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked111"><span className="label label-primary"><b>Bleeding</b></span></label>
                    </div>
                  </div>
                  <div className="col-6 col-xl-3">
                    <div className="custom-control custom-checkbox checkbox-lg">
                      <input type="checkbox" className="custom-control-input bg-light" id="defaultUnchecked121" name="hives" defaultValue="hives" />
                      <label className="custom-control-label easy  " htmlFor="defaultUnchecked121"><span className="label label-primary"><b>Hives </b></span></label>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              {/* <div class="row block4">
            <div class="col-6 col-xl-4">
                <div class="custom-control custom-checkbox checkbox-lg">
                    <input type="checkbox" class="custom-control-input bg-light" id="defaultUnchecked13" name="rash" value="rash">
                    <label class="custom-control-label easy  " for="defaultUnchecked13"><span class="label label-primary"><b>Rash  </b></span></label>
                </div>
            </div>
            <div class="col-6 col-xl-4">
                <div class="custom-control custom-checkbox checkbox-lg">
                    <input type="checkbox" class="custom-control-input bg-light" id="defaultUnchecked14" name="muscle_spasm" value="muscle_spasm">
                    <label class="custom-control-label easy  " for="defaultUnchecked14"><span class="label label-primary"><b>Muscle spasm </b></span></label>
                </div>
            </div>
            <div class="col-6 col-xl-4">
                <div class="custom-control custom-checkbox checkbox-lg">
                    <input type="checkbox" class="custom-control-input bg-light" id="defaultUnchecked14" name="breath_problems" value="breath_problems">
                    <label class="custom-control-label easy  " for="defaultUnchecked14"><span class="label label-primary"><b> Breath Problems </b></span></label>
                </div>
            </div>
        </div> */}
              {/* <div class="text-center">
    <div class="custom-control custom-checkbox checkbox-lg">
        <input type="checkbox" class="custom-control-input bg-light" id="defaultUnchecked">
        <label class="custom-control-label easy  " for="defaultUnchecked"><span class="label label-primary"><b>None of these</b></span></label>
    </div>
    </div> */}
              <br />
              <div className="text-center" id="nb4">
                <a href="#t2"><button id="submit" type="submit" className="btn btn-primary btn-lg">Submit</button></a>
              </div>
            </div>
          </div>
          <br />
          <br />
        </form>
      </div>
  )
}

export default Symtoms