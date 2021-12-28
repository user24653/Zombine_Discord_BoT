const Discord = require('discord.js'); // ���������� ���������� discord.js
const robot = new Discord.Client(); // ���������, ��� robot - ���
const comms = require("./comms.js"); // ���������� ���� � ��������� ��� ����
const fs = require('fs'); // ���������� ������ ������ �������� ������� node.js  
let config = require('./config.json'); // ���������� ���� � ����������� � �����������
let token = config.token; // ������������ �� ���� �����
let prefix = config.prefix; // ������������ �� ���� �������

robot.on("ready", function() {
  /* ��� �������� �������, � ������� �������� ��������� �[��� ����] ����������!� */
  console.log(robot.user.username + " ����������!");
});


robot.on('message', (msg) => { // ������������ �� ���������
  if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
    var comm = msg.content.trim() + " ";
    var comm_name = comm.slice(0, comm.indexOf(" "));
    var messArr = comm.split(" ");
    for (comm_count in comms.comms) {
      var comm2 = prefix + comms.comms[comm_count].name;
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(robot, msg, messArr);
      }
    }
  }
});


robot.login(token); // ����������� ����