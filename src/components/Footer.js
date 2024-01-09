import React from 'react';
import './footer.css';

function Footer () {
    
    return (
<div className="footer">
<div className="footer-content">
    <div className="copyright">© А. Невежин 2023</div>
    <div className="telephone">Телефон/WhatsApp: +7 (960) 134-56-03</div>
    <div className="networks">
        <a href="https://t.me/anton_nevezhin" target="_blank" rel="noreferrer">
        <img className="footer-img"  alt = 'Ссылка' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAACWElEQVRYw73XTWxMURQH8F+rtKQaIZKKjY9UQ6JKhIVVbX0kNojYiI0FaxubbjRpuhIhRLESIWyEhaTEgoYIGgsRkVIfSYmkifqoohb3TTsdM/Pu06l/cpKZd+87//8959wzZ6rEowFb0YY1WIJ5ydoQXuEJbuE6PmfwXRbN6MZXjEXaF5xB01SI56ALoxmIC+0HOlGXlbwJT6dAXGi9WBRLvhYfKkieszdoiTn5dJDniygZiTqhiqeLPGcPMbuYgK7/QJ6z9kLyZlOr9qw2jMZ8Ad3TQPIoCXep9RM58gahcVSC9BOOoTXxvSIlCvWwZ4qkv3ATu1FbkNq2lHd31SSb/gWvcQ7nk8+wChuSZ5LP5bAZHmQ47XdcwjbMyHM0E4dx0eS2ezXFXy98jCB+jEOYX+QUbXiO46guWHub4ncQRkosjuAk1pUI34IkBb9xpMj64siIlhRwDbNKkO8VWvYo9pfYsyNWQLkUDOECdgrXdblQ8WPCfLBdaXRECBiE+xEbc2q/mbjvm5RHT4TP3mr0iUOtiQo/iLtl9lZjfYTPvmphhsuK9ynrK4WUpaEH5sreilejBmdxoIjjfRE+xlsxYYDMImAZruR9v2xiQiZc3zQfp/MVNwkDZKyAF0We9WOjkP9nKe+PJIeYhM6MUShmP/EyYl9HsYKoE3pzpeeCQrvn71/NcTRiYBrJ3wktuixahOm10uQDwu2JwkLcqXDYG2PJ82uiXbiv/0o8gqPlch6DRmGAzCJkGKcUuWqFqMogpB5bhAGkFUtN/nveLwwut3EjEZGKP/UqceTUrZDLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEwLTAyVDIxOjQwOjEyKzA1OjAwN+lauAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMC0wMlQyMTo0MDoxMiswNTowMEa04gQAAAAASUVORK5CYIJ7InN0YXR1cyI6MCwibXNnIjoiRXJyb3IiLCJyZWRpcmVjdCI6IiJ9" /></a>
        <a href="https://vk.com/nevezhin72" target="_blank" rel="noreferrer">
            <img className="footer-img"  alt = 'Ссылка' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAACYElEQVRYw73XO2jXUBTH8U99Vq2li1ARQcV2s/U1ilhL6+Ak+FzEVVEQnB1cFMVZtI9BNwcHh7oI1gfUB6KiboKKIlodFNtCW8W/QxKI1+Sff/o6cCDJuTnfX+49NzmpU7s1Yjd2oh1r0BTHfuA9XuAOBjBSIndVa0U/xlCp0cfQh5bpgJfgIn6VAIc+iQuoLwtvwatpgEN/iJW1wjfh6wzCE/+ItlqefDbgaRHNefB6URXPFjzxp3F9/WcX5wCe+JkQ3mp61V7WR8Kl6J9DeOKXoE70hvuMpSlB33FTtI+T4uyIj1/iFN7G5004gSOp+z9hKHVeh+6YldhYMguHMtQ9C5ZoXnytgt84FsS3B/dvy6ixRxmcA9CbM0XdQYK9qdhgENuRit3PgHfiTwbjCjzJEfAgYxaex7EnQawrdV9nEFsWL1cW4xF8k18oXUGydkxkiOuOx1/NePreKvmHxQnzBrzGwiDhUZwOrq0WFW1DcP2w6jthvEhABSdNzRYqfq2PFy1BBT+xbooirhXkHobHBYOSYin9Tcd8XK+S9yH01CCgghtYlANagNvYk7MUAzk5L8PBGgVUcFfUC4a2OY5PYldGvBFfMvLtg+XK9XuT8bTux1ZswflUfBzHsV5UO+viMW+CPKNSu6avhICZ8p70FLXETzZX8AkZO+vCHAo4l1XJ9aJtMdvwISyWY834MIvwT1ilwNpE3etMwz9gQxE8sRW4N8PT3lwrPLHFou51dBrgCZyttua1WLOogSwjZFTU7RR+xOpKCGkQ/Z53YCPW+vf3/J2oYxrErVhEof0FdjR59G/3PCQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTAtMDJUMjE6NDE6MDQrMDU6MDB3UQQiAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEwLTAyVDIxOjQxOjA0KzA1OjAwBgy8ngAAAABJRU5ErkJggnsic3RhdHVzIjowLCJtc2ciOiJFcnJvciIsInJlZGlyZWN0IjoiIn0=" /></a>
            <a href="https://ok.ru/anton.nevezhin.nevezhin72" target="_blank" rel="noreferrer"><img class="footer-img"  alt = 'Ссылка' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAACbElEQVRYw7XXzW9OQRQG8F+LtE21YSEpKqFJ7XxtmpRN2YhYWQj+BbGXWLFBxMJChEaX/Qt8duNr4SsSQtj5CCHBQmmbtGhYzFxub169M9We5OS978yd53nmzJkzc5ukWyd2Ywc2YS2Wxb5RvMET3MAVjGVgz2rrMYQJ/Er0CVxE7/8Qt+E0fmQQV/07TqE1l7wXz/6DuOr3sDKVfAs+zSN54e+wMWXmC0FeFtH1L/JWIYsXirzwRzG/wKKSgJPYk5EnL3EJT9GB5YnjVmEat8qN66Vn+w8cRHNpfDMOZWCMVZdiKCOEh0vjNmFz6f+RDJxzxaBO6UXmm797+myp/Uxsa4uzS8Eax1I4kKH6fkn0dKn9ZwGGBxl4+5qF2p5q7fF3KkajsNHYVn4nxXbAwwzF08IhBLuEavkCO2NbTyUySRH9nDHgF65hcYPZLMb1TKyPRThzi8ltbEWTsAW34c4ccCZTBbzCGnTjKD6UACbj84fY1x3ffZUqIGUJzlfCvQR92B+9r8GyXEhdgpRt8wn96cmtP3Fi92AwY81GhLrR1oC0LfaNZOCdF0OYkziX0dJAQEvsy8HaSzjJUktxlXwg+lxE/CnFhAtk3YAvZla5gSh8oiKiXaiMdXiD5fD1ChfI2QaMxmiVyYu+sogOfK3BmhKq5gw7laD6OYb93fvVPT0slOY6nBMNckirsC1yq1mu39U4iRFuKW8XkPw9VquxjcLtdb7J32JDHXlhK4QDZz7D3pVKXlgLjgn7da7EUzg+25qnWJdwgcwRMi4cRj114E0ZQpYKn+fbhZvwOjM/z1/jMW7iahRRa78BEb6GcZ61RrwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTAtMDJUMjE6MzY6MTArMDU6MDCEUy5VAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEwLTAyVDIxOjM2OjEwKzA1OjAw9Q6W6QAAAABJRU5ErkJggnsic3RhdHVzIjowLCJtc2ciOiJFcnJvciIsInJlZGlyZWN0IjoiIn0=" /></a>
    </div>
</div>
</div>
)
}

export default Footer