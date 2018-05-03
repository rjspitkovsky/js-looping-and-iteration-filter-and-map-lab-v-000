// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const names = drivers.filter(function (driver) {return driver.revenue > revenue})
  return names.map(function (name) {return name})
}