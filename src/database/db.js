import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('posts.db');

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS blackList (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, date TEXT)',
          [],
          resolve,
          (_, error) => reject(error),
        );
      });
    });
  }

  static getItems() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM blackList',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => reject(error),
        );
      });
    });
  }

  static createItem({ title, date }) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO blackList (title, date) VALUES (?, ?)`,
          [title, date],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }
  static updateItem(id, title) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `UPDATE blackList SET title = ? WHERE id = ?`,
          [title, id],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }
  static removeItem(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `DELETE FROM blackList WHERE id = ?`,
          [id],
          (_, result) => resolve(result.insertId),
          (_, error) => reject(error),
        );
      });
    });
  }
}
