import { useParams } from "react-router-dom";

import { RoomCode } from "../../components/RoomCode";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/useAuth";

import logoImg from "../../assets/images/logo.svg";

import "../../styles/room.scss";
import { Question } from "../../components/Question";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();

  const roomId = params.id;

  const { title, questions } = useRoom(roomId!);

  return (
    <div id="pageRoom">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />

          <div>
            <RoomCode code={roomId!} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="roomTitle">
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="questionsList">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              ></Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
