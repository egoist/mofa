import test from 'ava'
import {hasEmptyField} from '../src'

test('true', t => {
  const ret = hasEmptyField({a: '', b: 'wow'})
  t.true(ret)
})

test('false', t => {
  const ret = hasEmptyField({a: 'aaa', b: 'wow'})
  t.false(ret)
})
