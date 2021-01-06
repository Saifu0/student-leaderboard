## student-leaderboard
Full-stack web application which supports creating new entries of student details and a leaderboard which shows the ranking of each student according to the percentage (s)he got.

### Hosted URL:
[LINK](https://almabetter.herokuapp.com/)

### Installation in local machine
First clone this repo.

Then navigate to /frontend and type:
```
npm install
```

Then type:
```
npm start
```

after this, navigate to /backend and type:
```
pip install -r requirements.txt
```

Then type:
```
python manage.py runserver
```

#### Note:
Change ```axios``` baseURL from https://almabetter.herokuapp.com/api to 127.0.0.1:8000/api. Otherwise, APIs will be called from https://almabetter.herokuapp.com/api only.
