Write-Host " Enter You  GIT commit message" -Foregroundcolor Cyan
$commitMsg =Read-Host
git add .
git status
git commit -m "$commitMsg"
git push -u origin