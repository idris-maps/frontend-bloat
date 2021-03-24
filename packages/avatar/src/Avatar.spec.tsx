import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Avatar from './index';

configure({ adapter: new Adapter() });
describe('<Avatar />', () => {
  it('renders correctly by default', () => {
    const avatar = shallow((
      <Avatar>Something</Avatar>
    ));

    expect(avatar.hasClass('avatar')).toEqual(true);
    expect(avatar.prop('style')).toEqual(undefined);
    expect(avatar.hasClass('avatar--primary')).toEqual(false);
    expect(avatar.hasClass('avatar--secondary')).toEqual(false);
    expect(avatar.text()).toEqual('Something');
  });

  it('renders a title attribute', () => {
    const avatar = shallow((
      <Avatar title="Something else">Something</Avatar>
    ));

    expect(avatar.prop('title')).toEqual('Something else');
  });

  it('applies a provided theme', () => {
    const avatar = shallow((
      <Avatar theme="primary">Something</Avatar>
    ));

    expect(avatar.hasClass('avatar')).toEqual(true);
    expect(avatar.hasClass('avatar--primary')).toEqual(true);

    const avatarSecondary = shallow((
      <Avatar theme="secondary">Something</Avatar>
    ));

    expect(avatarSecondary.hasClass('avatar')).toEqual(true);
    expect(avatarSecondary.hasClass('avatar--secondary')).toEqual(true);
  });

  it('applies styles', () => {
    const customStyle = {
      backgroundColor: 'pink',
      color: 'red',
    };

    const avatar = shallow((
      <Avatar style={customStyle}>Something</Avatar>
    ));

    expect(avatar.prop('style')).toHaveProperty('backgroundColor', 'pink');
    expect(avatar.prop('style')).toHaveProperty('color', 'red');
  });

  it('applies custom classes', () => {
    const avatar = shallow((
      <Avatar className="fancy fancier">Something</Avatar>
    ));

    expect(avatar.hasClass('avatar')).toEqual(true);
    expect(avatar.hasClass('fancy')).toEqual(true);
    expect(avatar.hasClass('fancier')).toEqual(true);
  });
});
