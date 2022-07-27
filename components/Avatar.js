export function Avatar({ avatar }) {

  return (
    <div
      className={`w-6 h-6 ring-1 ring-slate-300 rounded-full bg-white bg-contain hover:shadow-sm bg-[url(https://placehold.jp/150x150.png)]`}
    ></div>
  );
}

export function AvatarStack({ avatars }) {
  return (
    <div className="flex items-center gap-2">

      {avatars.map( avatar => <Avatar key={avatar.id} avatar={avatar} />)}

      <span className="text-sm text-white/50">
        {avatars.join(', ')}
      </span>
    </div>
  );
}