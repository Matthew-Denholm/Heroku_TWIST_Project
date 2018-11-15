var express = require('express');
var router = express.Router();
var School = require('../controllers/schoolController');
var Participant = require('../controllers/participantController');
var Presenter = require('../controllers/presenterController');
var Room = require('../controllers/roomController');
var Schedule = require('../controllers/scheduleController');
var Session = require('../controllers/sessionController');
var Topic = require('../controllers/topicController');

//router.get('/', Participant.index); //landing page

//Participant Routes
///////////////////////////////////////////////

router.get('/Participant/create', Participant.participant_create_get);

router.post('/Participant/create', Participant.participant_create_post);

router.get('/Participant/:id/delete',Participant.participant_delete_get);

router.post('/Participant/:id/delete',Participant.participant_delete_post);

router.get('/Participant/:id/update',Participant.participant_update_get);

router.post('/Participant/:id/update',Participant.participant_update_post);

router.get('/Participant/:id', Participant.participant_detail);

router.get('/Participants', Participant.participant_list);

//Presenter Routes
///////////////////////////////////////////////

router.get('/Presenter/create', Presenter.presenter_create_get);

router.post('/Presenter/create', Presenter.presenter_create_post);

router.get('/Presenter/:id/delete',Presenter.presenter_delete_get);

router.post('/Presenter/:id/delete',Presenter.presenter_delete_post);

router.get('/presenter/:id/update',Presenter.presenter_update_get);

router.post('/presenter/:id/update',Presenter.presenter_update_post);

router.get('/presenter/:id', Presenter.presenter_detail);

router.get('/presenter', Presenter.presenter_list);

//Schedule Routes
///////////////////////////////////////////////

router.get('/Schedule/create', Schedule.schedule_create_get);

router.post('/Schedule/create', Schedule.schedule_create_post);

router.get('/Schedule/:id/delete',Schedule.schedule_delete_get);

router.post('/Schedule/:id/delete',Schedule.schedule_delete_post);

router.get('/Schedule/:id/update',Schedule.schedule_update_get);

router.post('/Schedule/:id/update',Schedule.schedule_update_post);

router.get('/schedule/:id', Schedule.schedule_detail);

router.get('/schedule', Schedule.schedule_list)

//Topic Routes
///////////////////////////////////////////////

router.get('/Topic/create', Topic.topic_create_get);

router.post('/Topic/create', Topic.topic_create_post);

router.get('/Topic/:id/delete',Topic.topic_delete_get);

router.post('/Topic/:id/delete',Topic.topic_delete_post);

router.get('/Topic/:id/update',Topic.topic_update_get);

router.post('/Topic/:id/update',Topic.topic_update_post);

router.get('/topic/:id', Topic.topic_detail);

router.get('/topic', Topic.topic_list)

/////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;
