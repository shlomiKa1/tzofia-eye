# tzofia-eye

## Database

כרגע אני לא רואה סיבה לשימוש במבנה נתונים לא רלציוני, כי יש פה ערך יחיד לכל שדה (כאילו לא [] | {}).

לכן אשתמש ב SUPABASE

---

## Endpoints

| method | path                   | status                |
| ------ | ---------------------- | --------------------- |
| GET    | /api/alerts ? query    | 200 / 500             |
| GET    | /api/alerts/:id        | 200 / 400 / 404 / 500 |
| POST   | /api/alerts & body     | 201 / 400 /500        |
| DELETE | /api/alerts/:id        | 200 / 400 / 404 / 500 |
| PUT    | /api/alerts/:id & body | 200 / 400 / 404 / 500 |

| סטטוס | סיבה                       |
| ----- | -------------------------- |
| 200   | הצלחה בקשה                 |
| 201   | יצירה משהו חדש             |
| 400   | שגיאה - ערך לא תקין או חסר |
| 404   | שגיאה - ערך לא נמצא        |
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

## מבנה תיקיות