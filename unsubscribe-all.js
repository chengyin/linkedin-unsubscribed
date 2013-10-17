// 1. Go to page https://www.linkedin.com/settings/email-frequency
// 2. You mean need to login 
// 3. Open JS console
// 4. Copy the following code in and execute
// 5. No more emails

$('.settings li select:has(option[value=never])').val('never');
$('.settings li select:has(option[value=WEB])').val('WEB');
$('.settings li select:has(option[value=NEVER])').val('NEVER');
$('.settings li select:has(option[value=NONE])').val('NONE');
$('.settings li select:has(option[value=false])').val('false');
$('input[type=submit]').prop('disabled', false).click();
