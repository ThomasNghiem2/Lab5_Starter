// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('no dash', () => {
  expect(isPhoneNumber('11111111')).toBe(false);
});

test('letters', () => {
  expect(isPhoneNumber('111-111-a111')).toBe(false);
});

test('parentheses', () => {
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});

test('dash', () => {
  expect(isPhoneNumber('111-111-1111')).toBe(true);
});

test('no @', () => {
  expect(isEmail('thomashello.com')).toBe(false);
});

test('wrong length domain', () => {
  expect(isEmail('thomashello@gmail.comma')).toBe(false);
});

test('normal email', () => {
  expect(isEmail('thomashello@gmail.com')).toBe(true);
});

test('all caps', () => {
  expect(isEmail('THOMASHELLO@GMAIL.COM')).toBe(true);
});

test('not enough chars', () => {
  expect(isStrongPassword('to')).toBe(false);
});

test('bad symbol', () => {
  expect(isStrongPassword('thomas&*(')).toBe(false);
});

test('good password', () => {
  expect(isStrongPassword('thomas')).toBe(true);
});

test('all caps', () => {
  expect(isStrongPassword('THOMASHELLO')).toBe(true);
});

test('wrong year digit cnt', () => {
  expect(isDate('01/01/01')).toBe(false);
});

test('letters', () => {
  expect(isDate('a1/01/0001')).toBe(false);
});

test('xx 1 digit long', () => {
  expect(isDate('1/1/0001')).toBe(true);
});

test('xx 2 digits long', () => {
  expect(isDate('01/01/0001')).toBe(true);
});

test('bad letter', () => {
  expect(isHexColor('#fffffg')).toBe(false);
});

test('bad length', () => {
  expect(isHexColor('ffff')).toBe(false);
});

test('3 char', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('6 char', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

