const config = require('./config.json'); // ���������� ���� � ����������� � �����������
const Discord = require('discord.js'); // ���������� ���������� discord.js
const prefix = config.prefix; // ������������ �������

// ������� //

function test(robot, mess, args) {
  mess.channel.send('Test!')
}


// ������ ������ //

var comms_list = [{
  name: "test",
  out: test,
  about: "�������� �������"
}];

// Name - �������� �������, �� ������� ����� ����������� ���
// Out - �������� ������� � ��������
// About - �������� ������� 

module.exports.comms = comms_list;