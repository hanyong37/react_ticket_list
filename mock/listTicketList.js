// eslint-disable-next-line import/no-extraneous-dependencies
import { parse } from 'url';

// mock tableListDataSource
const genList = (current, pageSize) => {
  const tableListDataSource = [
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Can you please restart the device? and try again. ",
        "dtend": "2020-01-01",
        "dtstart": "2019-12-30",
        "house_name": "GR1",
        "house_path": "/en/houses/4550",
        "house_tags": ["tag1", "tag2"],
        "id": 1730424,
        "room_name": "#GR1 Light Filled 2 BR Ikebukuro Large Apartment",
        "starred": "orange",
        "status": null,
        "summary": "滞在 GR1 (12月30日 2019 (月曜日) ~ 1月1日 2020 (水曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1730424",
        "unread": false,
        "updated_at": "2019-12-31T08:05:09.659+09:00",
        "url": "/en/old/tickets/1730424/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/479a57a7680c784367a48d61ef3b5451?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMAC9JXN8Y",
              "confirm_number": "HMAC9JXN8Y",
              "id": 7233743
            }
          ],
          "email": "suya-1221@guest.airbnb.com",
          "name": "Suya Xu"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Yes, it on basement without windows but there's a ventilation fan. There's an elevator as well as stairs going to the room.",
        "house_name": "2M11",
        "house_path": "/en/houses/13872",
        "house_tags": ["tag2", "tag3"],
        "id": 1810812,
        "room_name": "",
        "starred": "pink",
        "status": null,
        "summary": "Airbnb2 Inquiry : Stanley",
        "ticket_path": "/en/tickets/1810812",
        "unread": false,
        "updated_at": "2019-12-30T19:40:39.000+09:00",
        "url": "/en/old/tickets/1810812/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/1d68f74ee21d4acc53b08d0cbbf4ed98?d=monsterid&s=128",
          "bookings": [],
          "email": "guest-2233@no-email-supplied.co",
          "name": "Stanley"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Hello,\r\n\r\nI checked my other listing and its available from Jan 2 to Jan 4. You may booked it as well.\r\n\r\nhttps://www.airbnb.com/rooms/36927061\r\n\r\nThank you and looking forward to having you as my ...",
        "house_name": "RCx",
        "house_path": "/en/houses/81116",
        "id": 1764713,
        "room_name": "",
        "starred": "pink",
        "status": null,
        "summary": "Airbnb2 Inquiry : Thomas",
        "ticket_path": "/en/tickets/1764713",
        "unread": false,
        "updated_at": "2019-12-30T13:20:50.424+09:00",
        "url": "/en/old/tickets/1764713/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/039b866162178a27c0fd2766d3bc836c?d=monsterid&s=128",
          "bookings": [],
          "email": "guest-3322@no-email-supplied.co",
          "name": "Thomas"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Thank you for replying. Let me get back to you in awhile. ",
        "dtend": "2019-12-02",
        "dtstart": "2019-11-29",
        "house_name": "OIx",
        "house_path": "/en/houses/71523",
        "house_tags": ["tag1"],
        "id": 1705057,
        "room_name": "OI2",
        "starred": null,
        "status": null,
        "summary": "過去 OI2 (11月29日 2019 (金曜日) ~ 12月2日 2019 (月曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1705057",
        "unread": false,
        "updated_at": "2019-12-29T12:52:41.824+09:00",
        "url": "/en/old/tickets/1705057/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/e130e56bbf9b5ddec1541a8e6ca32efa?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMAQNYMYAJ",
              "confirm_number": "HMAQNYMYAJ",
              "id": 7187587
            }
          ],
          "email": "luhan-2344@guest.airbnb.com",
          "name": "Lu Han Wang"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Hi,\r\n\r\nHow are you?\r\n\r\nI just want to follow up regarding to your pre check in form below.\r\n\r\nhttps://cloud.airhost.co/en/b/1122\r\n\r\nPlease fill in all the info until it gets 100%.\r\n\r\nThank you.\r\n...",
        "dtend": "2019-12-22",
        "dtstart": "2019-12-20",
        "house_name": "YF1",
        "house_path": "/en/houses/1138",
        "id": 1760958,
        "room_name": "Spacious house Max8 w/FREE Wifi #YF1",
        "starred": "orange",
        "status": null,
        "summary": "過去 YF1 (12月20日 2019 (金曜日) ~ 12月22日 2019 (日曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1760958",
        "unread": false,
        "updated_at": "2019-12-29T09:38:48.002+09:00",
        "url": "/en/old/tickets/1760958/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/e2538f8f3b3544d765de9fb090836f0b?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMTZYANQYS",
              "confirm_number": "HMTZYANQYS",
              "id": 7283128
            }
          ],
          "email": "kevin-4256@guest.airbnb.com",
          "name": "Kevin Lane"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Hi,\n\nI already have sent you a resolution request. Please check and accept it.\n\nRegards,\nMinoru Daniel\n",
        "dtend": "2019-10-31",
        "dtstart": "2019-10-29",
        "house_name": "2M617B",
        "house_path": "/en/houses/1088",
        "id": 1537376,
        "room_name": "walk distance to Shinjuku!easyaccess/max6/WIFI#2M6",
        "starred": null,
        "status": null,
        "summary": "過去 2M617B (10月29日 2019 (火曜日) ~ 10月31日 2019 (木曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1537376",
        "unread": false,
        "updated_at": "2019-11-01T22:50:16.000+09:00",
        "url": "/en/old/tickets/1537376/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/433ae095561a59044d739492e7d98ef9?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMAH8W5NYR",
              "confirm_number": "HMAH8W5NYR",
              "id": 6908588
            }
          ],
          "email": "user-123@guest.airbnb.com",
          "name": "奕 杨"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Dear Hyoungjoo Kook,\r\n\r\nI hope you are doing great!\r\n\r\nI am just wondering if you're able to write a review about your stay in my place? (If you haven't done it yet)  It would be a big help for my ...",
        "dtend": "2019-10-27",
        "dtstart": "2019-10-26",
        "house_name": "VK1",
        "house_path": "/en/houses/4543",
        "id": 1584968,
        "room_name": "1min to Higashi-Shinjuku Stn. Max. 9w/ Wifi#VK1",
        "starred": "orange",
        "status": null,
        "summary": "過去 VK1 (10月26日 2019 (土曜日) ~ 10月27日 2019 (日曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1584968",
        "unread": false,
        "updated_at": "2019-10-28T19:14:50.190+09:00",
        "url": "/en/old/tickets/1584968/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/75cbaae5444b1e106e2a6b7f60177db7?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMAJNZA458",
              "confirm_number": "HMAJNZA458",
              "id": 6989727
            }
          ],
          "email": "hyoungjoo-6677@guest.airbnb.com",
          "name": "Hyoungjoo Kook"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "I will only charge the cost of shipping fee, no service charge. I need to know where to send it so i can check how much is the shipping.",
        "dtend": "2019-10-01",
        "dtstart": "2019-09-30",
        "house_name": "OD1",
        "house_path": "/en/houses/22128",
        "id": 1527966,
        "room_name": "Carol",
        "starred": "orange",
        "status": null,
        "summary": "過去 Carol (9月30日 2019 (月曜日) ~ 10月1日 2019 (火曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1527966",
        "unread": false,
        "updated_at": "2019-10-02T19:14:22.749+09:00",
        "url": "/en/old/tickets/1527966/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/8e032c29f009808458f65de5da0f09f3?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMAHDJSCEH",
              "confirm_number": "HMAHDJSCEH",
              "id": 6889693
            }
          ],
          "email": "user-887@guest.airbnb.com",
          "name": "睿 王"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Hi Charlotte,\n\nI will send you the resolution request. Please check.\n\nThank you,\nYoshi",
        "dtend": "2019-09-30",
        "dtstart": "2019-09-29",
        "house_name": "OD1",
        "house_path": "/en/houses/22128",
        "id": 1527576,
        "room_name": "Carol",
        "starred": "orange",
        "status": null,
        "summary": "過去 Carol (9月29日 2019 (日曜日) ~ 9月30日 2019 (月曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1527576",
        "unread": false,
        "updated_at": "2019-10-02T12:02:44.000+09:00",
        "url": "/en/old/tickets/1527576/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/41bfb6e6fcee9d318049d9fc95d41d98?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMACEEEN5P",
              "confirm_number": "HMACEEEN5P",
              "id": 6889305
            }
          ],
          "email": "charlotte-83726nnq@guest.airbnb.com",
          "name": "Charlotte Demierre"
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "##- 返信内容はこの行より上に入力してください -##\n\n                                 booking.com\n\n   予約番号： 2467638751\n\n                               ゲストからの新着メッセージです\n\n                             Tara Looney様のメッセージ：\n\n  ...",
        "house_name": null,
        "id": 1501535,
        "room_name": "",
        "starred": "orange",
        "status": null,
        "summary": "Re: Bookingcom Check in Reminder (ID: 2467638751)",
        "ticket_path": "/en/tickets/1501535",
        "unread": false,
        "updated_at": "2019-09-20T17:39:51.032+09:00",
        "url": "/en/old/tickets/1501535/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/ce5a4626abdae45fec34b8db240fac2f?d=monsterid&s=128",
          "bookings": [],
          "email": "tloone-32232432@guest.booking.com",
          "name": "\"Tara Looney（Book..."
        }
      },
      {
        "archived": false,
        "assignee": {
          "id": null,
          "name": ""
        },
        "description": "Please also note that the kitchen has a broken door,  I was unable to use the oven because you lacked any oven pans for me to cook with. And the bathtub in suite B drains very very slow. That  you ...",
        "dtend": "2019-08-18",
        "dtstart": "2019-08-14",
        "house_name": "HW1",
        "house_path": "/en/houses/5793",
        "id": 1190427,
        "room_name": "Ocean view!/2BR!/Max 5 +Washlet&TV! #HW1",
        "starred": "orange",
        "status": null,
        "summary": "過去 HW1 (8月14日 2019 (水曜日) ~ 8月18日 2019 (日曜日)) @airbnb2",
        "ticket_path": "/en/tickets/1190427",
        "unread": false,
        "updated_at": "2019-08-20T13:42:57.000+09:00",
        "url": "/en/old/tickets/1190427/edit",
        "user": {
          "avatar": "https://www.gravatar.com/avatar/57d93e88a7df1d5e7e04de00463f2f92?d=monsterid&s=128",
          "bookings": [
            {
              "booking_uid": "HMANPXH2CN",
              "confirm_number": "HMANPXH2CN",
              "id": 6324173
            }
          ],
          "email": "souriya-3455@guest.airbnb.com",
          "name": "Souriya Khamvongsa"
        }
      }
    ];

  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getRule(req, res, u) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query;
  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }

      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.starred) {
    dataSource = dataSource.filter(data => data.starred && data.starred.includes(params.starred));
  }

  if (params.confirm_number) {
    dataSource = dataSource.filter(data => data.user && data.user.bookings && data.user.bookings.map((b) => b.confirm_number).join('').includes(params.confirm_number));
  }

  if (params.house_tags) {
    dataSource = dataSource.filter(data => data.house_tags && data.house_tags.join('').includes(params.house_tags || ''));
  }

  if (params.house_name) {
    dataSource = dataSource.filter(data => data.house_name && data.house_name.includes(params.house_name || ''));
  }

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };
  return res.json(result);
}

function postRule(req, res, u, b) {
  let realUrl = u;

  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter(item => key.indexOf(item.key) === -1);
      break;

    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule = {
          key: tableListDataSource.length,
          href: 'https://ant.design',
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          ][i % 2],
          name,
          owner: '曲丽丽',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: new Date(),
          createdAt: new Date(),
          progress: Math.ceil(Math.random() * 100),
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();

      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map(item => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }

          return item;
        });
        return res.json(newRule);
      })();

      return;

    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };
  res.json(result);
}

export default {
  'GET /api/tickets': getRule,
  'POST /api/ticket': postRule,
};
