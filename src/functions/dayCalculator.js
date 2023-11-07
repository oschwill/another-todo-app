const MaxDays = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const calculateAge = (_actualDate, _futureDate) => {
  let age_dt = new Date(Date.now() - _actualDate.getTime());

  let years = Math.abs(age_dt.getUTCFullYear() - 1970);
  let months = Math.abs(age_dt.getUTCMonth());
  let days = 0;

  if (_actualDate.getDate() <= _futureDate.getDate()) {
    days = _futureDate.getDate() - _actualDate.getDate();
  } else {
    days = MaxDays[_actualDate.getMonth()] + _futureDate.getDate() - _actualDate.getDate();
  }

  return {
    years,
    months,
    days,
  };
};
