module.exports = {
  list: {
    query: "select * from t_person",
  },
  createPerson: {
    query: "insert into own_url_table set ?",
    //query문이 자동으로 완성되서 들어감
  },
  geturl: {
    query: "select own_url from own_url_table where own_addr = ?",
  },
  getarticle: {
    query:
      "select main_headline,headline,contents1,contents2,contents3,contents4,contents5,Imageurl from article_table where year = ? AND date = ? ",
  },
  getartist1: {
    query:
      "select artist_name,artist_profile1,artist_profile2,artist_resume,artist_mainspeak,artist_subspeak from artist_info_table where artist_id = ? ",
  },
  getpartners: {
    query:
      "select artist_name,artist_profile1,artist_profile2,artist_resume,artist_mainspeak,artist_subspeak from artist_info_table where artist_id = ? ",
  },
  updateartist1: {
    query: "update artist_info_table set ? where artist_id = ? ",
  },
  updateartistimage: {
    query: "update artist_paint_table set ? where paint_number = ? ",
  },
  getartistprize: {
    query: "select artist_prize from artist_prize_table where artist_id = ?",
  },
  getartistpaint: {
    query: "select artist_paint from artist_paint_table where artist_id = ?",
  },
  createartistprize: {
    query: "insert into artist_prize_table set ?",
  },
  createImage: {
    query: "insert into newtable set ?",
  },
  deletePerson: {
    query: "delete from t_person where id=?",
  },
  updatePerson: {
    query: "update t_person set ? where id=?",
  },
};
