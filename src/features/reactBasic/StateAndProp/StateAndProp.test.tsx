import { fireEvent, render, screen } from '@testing-library/react';
import StateAndProp from './StateAndProp';

const propString = "test string";
const propNumber = 99;
const childSpanText = "test child";

it('render component elements', () => {
  render(<StateAndProp propString={propString} propNumber={propNumber}><span>{childSpanText}</span></StateAndProp>);

  const spanStateString = screen.getByText(/DANE/i);
  expect(spanStateString).toBeInTheDocument();
  const spanStateNumber = screen.getByText(/12/i);
  expect(spanStateNumber).toBeInTheDocument();
  const spanStateObjectName = screen.getByText(/name = Alina/i);
  expect(spanStateObjectName).toBeInTheDocument();
  const spanStateObjectAge = screen.getByText(/age = 10/i);
  expect(spanStateObjectAge).toBeInTheDocument();

  const spanPropsString = screen.getByText(/test string/i);
  expect(spanPropsString).toBeInTheDocument();
  const spanPropsNumber = screen.getByText(/99/i);
  expect(spanPropsNumber).toBeInTheDocument();

  const spanPropsChildren = screen.getByText(/test child/i);
  expect(spanPropsChildren).toBeInTheDocument();
});

it('render component without propNumber', () => {
  render(<StateAndProp propString={propString}><span>{childSpanText}</span></StateAndProp>);

  const spanPropsNumber = screen.getByText(/\[UPS\] value from parent not given/i);
  expect(spanPropsNumber).toBeInTheDocument();

});

it('change state on click', () => {
  render(<StateAndProp propString={propString}><span>{childSpanText}</span></StateAndProp>);

  const buttonsNew = screen.getAllByRole('button', { name: 'NEW' });
  const buttonsInit = screen.getAllByRole('button', { name: 'INIT' });
  let spanStateString = screen.getByText(/DANE/i);
  let spanStateNumber = screen.getByText(/12/i);
  let spanStateObjectName = screen.getByText(/name = Alina/i);
  let spanStateObjectAge = screen.getByText(/age = 10/i);
  expect(spanStateString).toBeInTheDocument();
  expect(spanStateNumber).toBeInTheDocument();
  expect(spanStateObjectName).toBeInTheDocument();
  expect(spanStateObjectAge).toBeInTheDocument();

  buttonsNew.forEach(btn => {
    fireEvent.click(btn)
  })
  spanStateString = screen.getByText(/NOWE DANE/i);
  spanStateNumber = screen.getByText(/99/i);
  spanStateObjectName = screen.getByText(/name = Tadeusz/i);
  spanStateObjectAge = screen.getByText(/age = 40/i);
  expect(spanStateString).toBeInTheDocument();
  expect(spanStateNumber).toBeInTheDocument();
  expect(spanStateObjectName).toBeInTheDocument();
  expect(spanStateObjectAge).toBeInTheDocument();

  buttonsInit.forEach(btn => {
    fireEvent.click(btn)
  })
  spanStateString = screen.getByText(/DANE/i);
  spanStateNumber = screen.getByText(/12/i);
  spanStateObjectName = screen.getByText(/name = Alina/i);
  spanStateObjectAge = screen.getByText(/age = 10/i);
  expect(spanStateString).toBeInTheDocument();
  expect(spanStateNumber).toBeInTheDocument();
  expect(spanStateObjectName).toBeInTheDocument();
  expect(spanStateObjectAge).toBeInTheDocument();
});