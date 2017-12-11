import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ReactDOM from 'react-dom';
import './App.css'

injectTapEventPlugin();
class WebApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="maintitle" align="center">
        <div className="twitterimg">
            <img src="twitterlogo1.png" />
            <h1 align="center">Twitter</h1>
            <h2>What’s happening?</h2>
        </div>
      </div>
        <div className="tabs">
    <Tabs>
      <Tab label="Featured" >
        <div>
        <Card>
          <CardHeader
            title="PMO India"
            subtitle="@PMOIndia"
            avatar="namo.png"
          />
          <CardText>
          Prime Minister Narendra Modi, who has set a very ambitious target for India to reduce its carbon intensity, is committed to moving the country to a lower carbon renewable energy future, World bank President Jim Yong Kim has said.
          "I am very optimistic about what could happen with renewable energy (in India). The other thing that's so important is Prime Minister Modi is very personal, very public and very strong support of moving India to a lower carbon renewable energy future," Kim told reporters in a conference call ahead of the One Planet Summit in France on Monday.
          </CardText>
          <CardMedia>
            <img src="modi11.jpg" />
          </CardMedia>
        </Card>
        </div>
      </Tab>
      <Tab label="Sports" >
        <div>
        <Card>
          <CardHeader
            title="ESPNcricinfo"
            subtitle="@ESPNcricinfo"
            avatar="espn.png"
          />
          <CardText>
          Mitchell Johnson believes England have enormous mental hurdles to overcome if they are to keep the Ashes series alive in Perth, reckoning that Alastair Cook is contemplating retirement while the England captain Joe Root will be questioning his decision to send Australia in to bat in Adelaide.
          As the spearhead of Australia's 5-0 Ashes sweep of England four years ago, Johnson watched Steven Smith's team train at the WACA Ground on Monday and said he could see major parallels between that series and this one in terms of the escalating mental battles being fought by the visitors. The 2013-14 series ended in the resignation of Andy Flower as coach, plus the withdrawal of Jonathan Trott from the tour and the retirement of Graeme Swann. Kevin Pietersen, meanwhile, never played for England again.
          </CardText>
          <CardMedia>
            <img src="johnson.jpg" />
          </CardMedia>
        </Card>
        </div>
      </Tab>
      <Tab
        label="Music"
        data-route="/home"
      >
        <div>
        <Card>
          <CardHeader
            title="Sony Music India"
            subtitle="@sonymusicindia"
            avatar="sonymusic.png"
          />
          <CardText>
              Wear the party hat 🎉
              Put on your dancing shoes 👟👠
              Practice those sizzling moves 💃🏽
              HARRDYSANDHU's  most awaited single, #Naah is out NOW ! Can you handle the NAAH MADNESS? http://bit.ly/NaahByHarrdySandhu '
              @Norafatehi @SonyMusicNorth @WynkMusic
          </CardText>
          <CardMedia>
            <img src="hardy.jpg" />
          </CardMedia>
        </Card>
        </div>
      </Tab>
      <Tab label="Entertainment" >
        <div>
        <Card>
          <CardHeader
            title="Akshay Kumar"
            subtitle="@akshaykumar"
            avatar="akki.png"
          />
          <CardText>
              A good beginning makes a good ending...true story 🙃 It is a wrap for #GOLD, an incredible journey with a great team. See you at the movies 😉
          </CardText>
          <CardMedia>
              <img src="omg.jpeg" />
          </CardMedia>
        </Card>
        </div>
      </Tab>
      <Tab label="News" >
        <div>
        <Card>
          <CardHeader
            title="Rajdeep Sardesai"
            subtitle="@sardesairajdeep"
            avatar="rajdeep.png"
          />
          <CardText>
            Listening to @OfficeOfRG in Kalol: if @narendramodi says Congress is finished, then why does he spend half his speech talking about the Congress. He can attack me personally, I will never attack him..  #ElectionsOnMyPlate
          </CardText>
          <CardMedia>
            <img src="raj.png" />
          </CardMedia>
        </Card>
        </div>
      </Tab>
      <Tab label="LifeStyle" >
        <div>
        <Card>
          <CardHeader
            title="Odisha Tourism"
            subtitle="@odisha_tourism"
            avatar="odishatourism.png"
          />
          <CardText>
            History created again ! First direct international flight of @airindiain  from Bangkok AI 339 landed in Biju Patnaik International airport at 6.55 am today. Inaugural flight is being greeted with water canon salute.@CMO_Odisha @Naveen_Odisha  @ThailandFanClub @incredibleindia
          </CardText>
          <CardMedia>
            <img src="odisha.jpg" width="728" height="728"/>
          </CardMedia>
        </Card>
        </div>
      </Tab>
    </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <WebApp />, document.getElementById('root')
);
