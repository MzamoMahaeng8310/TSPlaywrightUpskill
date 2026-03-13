Write-Host "Generating Allure Report..." -ForegroundColor Green
npx allure generate allure-results --clean allure-report
Write-Host "Openning Allure Report..." -ForegroundColor Cyan
npx allure open allure-report