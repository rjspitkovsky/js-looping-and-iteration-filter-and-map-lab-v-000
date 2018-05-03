// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const names = drivers.filter(function (driver) {return driver.revenue > revenue})
  return names.map(function (name) {return name.name})
}

function exactMatch(drivers, object) {
  let key = Object.keys(object)
  let value = Object.values(object)
  return drivers.filter(function (driver) {return driver[object[key]] === values})
}
