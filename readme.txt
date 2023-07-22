(c) Sumit Biswas

Challenges:

1. Deleting the alarm button function was somewhat difficult to built in the beginning, but after doing some Rnd I got the answer. It was a problem as HTML was getting injected dynamically and adding a eventListener in the beginning was causing problem as in the beginning that alarm List elements still does not exist until we set an alarm. So, I solved this using event delegation.

2. Then comes the delete part, where after clicking the delete button it's parent <li> element should be deleted. which I achieved later by using delete_btn.parentElement.remove()

3. Alert-- when the alarm time matches, I used setInterval to achieve this.