import { atom } from 'recoil';

export const firstname = atom({
  key: 'firstname',
  default: '',
});

export const authentication = atom({
  key: 'authentication',
  default: '',
});
export const error= atom({
    key:'error',
    default :false
})