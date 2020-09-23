const Sequelize = require("sequelize") //for things like Sequelize.STRING
const { STRING, FLOAT } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/guestlist', {logging: false});
// const conn = new Sequelize('postgres://localhost:5432/friendslistapp')


const Guest = conn.define('guest', {
  name: {
    type: STRING
  },
  group: {
    type: STRING
  },
  table: {
    type: FLOAT
  }
});

const Table = conn.define('table', {
  table: {
    type: FLOAT
  },
  group: {
    type: STRING
  }
});

const Group = conn.define('group', {
  name: {
    type: STRING
  }
});

const syncAndSeed = async()=> {
  console.log('HELLO')
  await conn.sync({ force: true });
  let groups = [
    {
      name: "Friends"
    },
    {
      name: "Family"
    },
    {
      name: "Extra"
    }
  ];

  let tables = [
    {
      table: 1,
      group: "Family"
    },
    {
      table: 2,
      group: "Friends"
    },
    {
      table: 3,
      group: "Extra"
    }
  ];

  let guests = [
    {
      name: "Aunt Connie",
      group: "Family",
      table: 1
    },
    {
      name: "Uncle Brad",
      group: "Family",
      table: 1
    },
    {
      name: "Mom",
      group: "Family",
      table: 1
    },
    {
      name: "Dad",
      group: "Family",
      table: 1
    },
    {
      name: "Stephanie",
      group: "Friends",
      table: 2
    },
    {
      name: "April",
      group: "Friends",
      table: 2
    },
    {
      name: "Scott",
      group: "Friends",
      table: 2
    },
    {
      name: "John",
      group: "Friends",
      table: 2
    },
    {
      name: "MIL Neighbor 1",
      group: "Extra",
      table: 3
    },
    {
      name: "MIL Neighbor 2",
      group: "Extra",
      table: 3
    },
    {
      name: "MIL Friend 1",
      group: "Extra",
      table: 3
    },
    {
      name: "MIL Friend 2",
      group: "Extra",
      table: 3
    }
  ];

  guests = await Promise.all(guests.map( guest => Guest.create(guest)));
  groups = await Promise.all(groups.map( group => Group.create(group)));
  tables = await Promise.all(tables.map( table => Table.create(table)));
}

module.exports = {
  conn,
  Group,
  Guest,
  Table,
  syncAndSeed
}
