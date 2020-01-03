var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var Team = require('../team.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {team: Team.team})
  //console.log(Team.team);
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio')
});

router.get('/contact', function(req, res, next) {
  res.render('contact')
})

router.post('/contact', function(req, res, next) {
  let mailOpts, smtpTrans;
  
smtpTrans = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail'
  });

  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'rbajaj852@gmail.com',
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, info) {
    if (error) {
      return console.log(error);
    }
    else {
       console.log("success" + info.response);
       res.render('index');
    }
  });


});

module.exports = router;
 