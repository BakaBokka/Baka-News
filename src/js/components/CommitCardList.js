("use strict");
export class CommitCardList {
  constructor(commits) {
    this._commits = commits;
  }

  //Метод добавления коммита
  _addCommit = (name, email, date, message, avatar) => {
    const data = { name, email, date, message, avatar };
    this._commits.callback(data);
  };

  //Метод проходит по массиву и добавляет коммиты в общую обёртку
  render = (array) => {
    array.forEach((item) => {
      this._addCommit(
        item.commit.committer.name,
        item.commit.committer.email,
        this._commits.datesApi.renderCardDate(
          new Date(item.commit.committer.date)
        ),
        item.commit.message,
        item.author.avatar_url
      );
    });
  };
}
