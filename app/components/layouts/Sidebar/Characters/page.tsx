"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function CharacterDropdown({ setCharacterItem, setCharacterName }: any) {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<[] | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("/api/api_characters");

        if (response.ok) {
          const data = await response.json();
          console.log("Reponse ---F--->", data);
          if (data.length > 0) {
            setCharacters(data);
          } else {
            console.log("No characters assets found");
            setCharacters([]); // Set characters to an empty array if no assets are found
          }
        } else if (response.status === 404) {
          console.log("No characters found");
        } else {
          console.error(
            "Error fetching characters: Status code",
            response.status
          );
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [selectedFile, selectedCharacter]);

  const handleCharacterClick = (id: string, name: string) => {
    setSelectedCharacter(selectedCharacter === id ? null : id);
    setCharacterItem(id);
    setCharacterName(name);
  };

  //Image upload
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return;

    setIsLoading(true); // Start loading
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", "ImageName"); // Use the file's actual name

    try {
      const response = await fetch("/api/api_characters", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully");
        setSelectedFile(null); // Clear the selected file
      } else {
        const data = await response.json();
        console.error("Image upload failed:", data.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleDeleteCharacter = async (id: string) => {
    console.log("Deleting pose with ID:", id);
    // Add your logic to delete the pose here

    try {
      const response = await fetch(`/api/api_characters`, {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({
          id: id,
        }),
      });
      if (response.ok) {
        console.log("Pose deleted successfully");

        setSelectedCharacter(null);
      } else {
        const data = await response.json();
        console.error("Image upload failed", data.message);
      }
    } catch (error) {
      console.error("Error deleting pose:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex grid-cols-3 gap-2 overflow-auto scroll-smooth lg:grid lg:gap-3 lg:overflow-visible">
      {(!characters || characters.length === 0) && (
        <div className="absolute inset-0 flex justify-center items-center">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-5 h-5 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="white"
            />
          </svg>
        </div>
      )}
      <div className="group cursor-pointer relative mx-auto flex w-full flex-col gap-1 items-center justify-center text-neutral-300 hover:text-white">
        <div className="relative flex bg-[#4e4e4e] aspect-square w-12 justify-center rounded flex-col items-center gap-1 lg:w-full">
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleFileChange}
          />
          {selectedFile ? (
            <div className="relative w-full h-full">
              <Image
                src={URL.createObjectURL(selectedFile)}
                className="cursor-pointer rounded object-cover w-full h-full"
                width={100}
                height={100}
                alt="Selected file"
              />
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </div>
        {selectedFile ? (
          <button
            onClick={handleImageUpload}
            disabled={isLoading}
            className={`flex w-full h-7 p-1 rounded cursor-pointer items-center text-center leading-none text-[0.65rem] ${
              isLoading
                ? "bg-[#424242] cursor-not-allowed opacity-50"
                : "bg-[#336AEA] hover:bg-blue-600"
            }`}
          >
            {isLoading && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin cursor-auto"
                viewBox="0 0 100 101"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="white"
                />
              </svg>
            )}
            Upload image
          </button>
        ) : (
          <p className="flex h-7 cursor-pointer items-center text-center text-2xs capitalize leading-none sm:text-xs">
            Upload Character Ref
          </p>
        )}
      </div>
      {characters &&
        characters.length > 0 &&
        characters.map(
          (
            character: {
              _id: string;
              download_url: string;
              asset_id: string;
              character_id: string;
              character_name: string;
            },
            index: number
          ) => (
            <div
              key={character._id}
              className="group relative mx-auto flex w-full flex-col gap-1 items-center justify-center text-neutral-300 hover:text-white"
            >
              <div className="relative bg-[#4e4e4e] aspect-square w-12 justify-center rounded overflow-hidden items-center gap-1 lg:w-full">
                <div className="relative w-full h-full">
                  <Image
                    src={character.download_url}
                    className="cursor-pointer rounded object-cover min-h-full"
                    width={100}
                    height={100}
                    alt={`Character ${index + 1}`}
                    onClick={() =>
                      handleCharacterClick(
                        character.character_id,
                        character.character_name
                      )
                    }
                  />
                  {selectedCharacter === character.character_id && (
                    <>
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="absolute top-1 right-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="absolute bottom-1 text-blue-600 right-1 w-4 h-4 cursor-pointer"
                        onClick={() =>
                          handleDeleteCharacter(character.character_id)
                        }
                        // stroke="black"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </>
                  )}
                </div>
              </div>
              <p className="flex h-7 cursor-pointer items-center text-center text-2xs capitalize leading-none sm:text-xs">
                {`Character ${index + 1}`}
              </p>
            </div>
          )
        )}
    </div>
  );
}

export default CharacterDropdown;
