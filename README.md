# tzofia-eye

## Database

כרגע אני לא רואה סיבה לשימוש במבנה נתונים לא רלציוני, כי יש פה ערך יחיד לכל שדה (כאילו לא [] | {}).

לכן אשתמש ב SUPABASE

---

## Endpoints

### alerts

| method | path                   | status                |
| ------ | ---------------------- | --------------------- |
| GET    | /api/alerts ? query    | 200 / 500             |
| GET    | /api/alerts/:id        | 200 / 400 / 404 / 500 |
| POST   | /api/alerts & body     | 201 / 400 /500        |
| DELETE | /api/alerts/:id        | 200 / 400 / 404 / 500 |
| PUT    | /api/alerts/:id & body | 200 / 400 / 404 / 500 |

---

### auth

| method | path                              | status                      |
| ------ | --------------------------------- | --------------------------- |
| POST   | /api/auth/register & body (admin) | 201 / 500 / 403 / 401 / 400 |
| POST   | /api/auth/login & body            | 200 / 400 / 404 / 500 / 401 |
| GET    | /api/auth/me                      | 200 / 500 / 401 /           |
| POST   | /api/auth/logout                  | 200 / 500                   |

---

### users

| method | path                        | status                      |
| ------ | --------------------------- | --------------------------- |
| GET    | /api/users (admin)          | 200 / 500 / 403 / 401       |
| UPDATE | /api/users/:id body (admin) | 200 / 500 / 401 / 403 / 400 |
| DELETE | /api/users/:id (admin)      | 200 / 500 / 401 / 403       |

---

| סטטוס | סיבה                       |
| ----- | -------------------------- |
| 200   | הצלחה בקשה                 |
| 201   | יצירה משהו חדש             |
| 400   | שגיאה - ערך לא תקין או חסר |
| 404   | שגיאה - ערך לא נמצא        |
| 401   | לא מוכר                    |
| 403   | אין לך הרשאה               |
| 500   | שגיאה בשרת                 |

---

## יישות התראה

| שדה         | סוג                                       |
| ----------- | ----------------------------------------- |
| displayName | string                                    |
| description | string - required                         |
| priority    | enam("Low", "Medium", "High", "Critical") |
| arena       | enam("North", "South", "Center")          |
| status      | enam("Active", "Handled")                 |
| lon         | number                                    |
| lat         | number                                    |
| createdAt   | date(Auto)                                |

---

## דברים שלא הספקתי

לצערי לא הספקתי לעשות:

### backend

את כל ההרשאות למשתמשים, כולל סינון להתראות או הצגת טיפול במשתמשים.

### frontend

יצירת משתמש חדש
הצגת משתמשים
הגנה על נתיבים כולל הרשאות
עדכון התראה
יציאה מהאתר
סינון וחיפוש התראות
הצגת התראה
יצירת התראה בקפיצת מחשב למקרה ויש 3 סוגים של מקומות CRTICAL שהסטטוס שלהם בהמתנה

וכמובן שיכול להיות עוד דברים
