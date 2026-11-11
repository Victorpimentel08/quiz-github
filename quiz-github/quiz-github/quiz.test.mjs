import assert from 'node:assert/strict';
import test from 'node:test';
import { questions, score } from './site/quiz.mjs';

test('tem cinco perguntas', () => assert.equal(questions.length, 5));
test('aceita todas as respostas corretas', () => assert.equal(score([0, 1, 2, 0, 1]), 5));
test('rejeita todas as respostas erradas', () => assert.equal(score([1, 2, 0, 1, 2]), 0));
test('calcula pontuação parcial', () => assert.equal(score([0, 0, 2, 1, 1]), 3));
test('resposta ausente não conta como acerto', () => assert.equal(score([]), 0));
