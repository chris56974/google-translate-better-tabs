# This file transforms the input from this post https://stackoverflow.com/questions/11069644
# "matches": [
#   "http://www.google.com/*",
#   "https://www.google.com/*",
#   "http://www.google.ad/*",
# ]

# into this
# "matches": [
#   "*://translate.google.com/*",
#   "*://translate.google.ad/*",
# ]

### SCRIPT ###

# If the first arg is not a file AND
# If the number of args does not equal 1
if [ ! -f $1 ] && [ $# -ne 1 ]; then
  echo "Error: 1 argument required (a file), $# provided"
  exit 1
fi

# 1. delete all the lines with https
# 2. replace http with *
# 3. replace www with translate
sed -e '/https/d' -e 's/http/\*/g' -e 's/www/translate/g' $1 > manifestt.json
