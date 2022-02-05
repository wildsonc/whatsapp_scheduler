class TaskDuplicated(Exception):
    def __init__(self, *args: object) -> None:
        super().__init__(*args)

    def __str__(self) -> str:
        return "A task with these parameters has already been sent"


class Blacklist(Exception):
    def __init__(self, *args) -> None:
        if args:
            self.message = f"Contact ({args[0]}) in blacklist"
        else:
            self.message = "Contact in blacklist"

    def __str__(self) -> str:
        return self.message


class WhatsappInvalid(Exception):
    def __init__(self, *args) -> None:
        if args:
            self.message = f"This contact ({args[0]}) is invalid"
        else:
            self.message = "This contact is invalid"

    def __str__(self) -> str:
        return self.message
