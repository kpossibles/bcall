DROP TABLE IF EXISTS MONITOR;
CREATE TABLE MONITOR (
  MON_ID INTEGER PRIMARY KEY ASC,
  MON_MAC VARCHAR(16) NOT NULL,
  MON_NAME VARCHAR(32) NOT NULL
);
